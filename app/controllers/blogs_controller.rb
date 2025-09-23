# frozen_string_literal: true

class BlogsController < ApplicationController
  before_action :set_blog, only: %i[ show edit update destroy ]

  inertia_share flash: -> { flash.to_hash }

  # GET /blogs
  def index
    @blogs = Blog.all
    render inertia: "Blog/Index", props: {
      blogs: @blogs.map do |blog|
        serialize_blog(blog)
      end
    }
  end

  # GET /blogs/1
  def show
    render inertia: "Blog/Show", props: {
      blog: serialize_blog(@blog)
    }
  end

  # GET /blogs/new
  def new
    @blog = Blog.new
    render inertia: "Blog/New", props: {
      blog: serialize_blog(@blog)
    }
  end

  # GET /blogs/1/edit
  def edit
    render inertia: "Blog/Edit", props: {
      blog: serialize_blog(@blog)
    }
  end

  # POST /blogs
  def create
    @blog = Blog.new(blog_params)

    if @blog.save
      redirect_to @blog, notice: "Blog was successfully created."
    else
      redirect_to new_blog_url, inertia: {errors: @blog.errors}
    end
  end

  # PATCH/PUT /blogs/1
  def update
    if @blog.update(blog_params)
      redirect_to @blog, notice: "Blog was successfully updated."
    else
      redirect_to edit_blog_url(@blog), inertia: {errors: @blog.errors}
    end
  end

  # DELETE /blogs/1
  def destroy
    @blog.destroy!
    redirect_to blogs_url, notice: "Blog was successfully destroyed."
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_blog
    @blog = Blog.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def blog_params
    params.require(:blog).permit(:title, :body)
  end

  def serialize_blog(blog)
    blog.as_json(only: [
      :id, :title, :body
    ])
  end
end
