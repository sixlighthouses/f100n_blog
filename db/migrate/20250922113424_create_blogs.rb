# frozen_string_literal: true

class CreateBlogs < ActiveRecord::Migration[8.0]
  def change
    create_table :blogs do |t|
      t.string :title
      t.text :body
      t.string :thumbnail

      t.timestamps
    end
  end
end
