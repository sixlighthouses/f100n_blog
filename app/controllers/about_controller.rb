# frozen_string_literal: true

class AboutController < InertiaController
  skip_before_action :authenticate
  def index
  end
end
