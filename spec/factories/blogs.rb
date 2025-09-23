# frozen_string_literal: true

FactoryBot.define do
  factory :blog do
    title { "MyString" }
    body { "MyText" }
    thumbnail { "MyString" }
  end
end
