# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|text|null: false|
|e-mail|text|null: false, unique: true|
|password|text|null: false|
|image|file| |

## groupsテーブル
|Column|Type|Option|
|------|----|------|
|group_name|text|null: false|

## messagesテーブル
|Column|Type|Option|
|------|----|------|
|massage|text|null: false|
|image|file| |
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user