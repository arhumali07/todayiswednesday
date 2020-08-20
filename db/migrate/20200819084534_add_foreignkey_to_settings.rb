class AddForeignkeyToSettings < ActiveRecord::Migration[6.0]
  def change
    add_foreign_key :settings, :shops
  end
end
