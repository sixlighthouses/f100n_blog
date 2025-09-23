# frozen_string_literal: true

require "rails_helper"

RSpec.describe "blogs/index", type: :view do
  before(:each) do
    assign(:blogs, [
      Blog.create!(
        title: "Title",
        body: "MyText"
      ),
      Blog.create!(
        title: "Title",
        body: "MyText"
      )
    ])
  end

  it "renders a list of blogs" do
    render
    cell_selector = "div>p"
    assert_select cell_selector, text: Regexp.new("Title".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("MyText".to_s), count: 2
  end
end
