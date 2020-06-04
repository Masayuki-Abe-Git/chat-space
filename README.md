# README

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false unique: true|
|email|string|null: false unique: true|
|password|integer|null: false|

### Association
- has_many :groups, through: :groups_users
- has_many :messages


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|message|text|null: false|
|user_id|references|foreign_key: true|
|group_id|references|foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|groupname|string|null: false unique: true|
|user_id|references|foreign_key: true|

### Association
- has_many :users, through: :groups_users
- has_many :messages


## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user