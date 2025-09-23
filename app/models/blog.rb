# frozen_string_literal: true

class Blog < ApplicationRecord
  has_one_attached :thumbnail
  has_rich_text :body
end
