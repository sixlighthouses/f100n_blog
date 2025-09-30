# frozen_string_literal: true

require "rails_helper"

RSpec.configure do |config|
  config.include FactoryBot::Syntax::Methods
end

RSpec.describe UserMailer, type: :mailer do
  describe "password_reset" do
    subject(:mail) { UserMailer.with(user:).password_reset }

    let(:user) { build(:user) }

    it "renders the headers" do
      expect(mail.subject).to eq("Reset your password")
      expect(mail.to).to eq([user.email])
    end
  end

  describe "email_verification" do
    subject(:mail) { UserMailer.with(user:).email_verification }

    let(:user) { build(:user) }

    it "renders the headers" do
      expect(mail.subject).to eq("Verify your email")
      expect(mail.to).to eq([user.email])
    end
  end
end
