require 'rails_helper'

RSpec.descride Message, type: :model do
  descrude '#create' do
    context '保存できるか' do
      it '文字が入力されている場合' do
        expect(build(:message, image: nil)).to be_valid
      end
      
      it '画像が選択されている場合' do
        expect(build(:message, content: nil)).to be_valid
      end

      it '文章と画像がどちらもある場合' do
        expect(build(:message)). to be_valid
      end
    end

    context '保存を拒否できるか' do
      it '画像も文章も空の場合' do
        message = build(:message, content: nil, image: nil)
        message.valid?
        expect(message.errors[:content]).to include("を入力してください")
      end

      it 'グループidが空の場合' do
        message = build(:message, group_id: nil)
        message.valid?
        expect(message.errors[:group]).to include("を入力してください")
      end

      it 'ユーザーidが空の場合' do
        message = build(:message, user_id: nil)
        message.valid?
        expect(message.errors[:user]).to include("を入力してください")
      end
    end
  end
end

