class CreateHyperLinks < ActiveRecord::Migration[7.2]
  def change
    create_table :hyper_links do |t|
      t.string :display_name
      t.string :url
      t.references :profile, null: false, foreign_key: true

      t.timestamps
    end
  end
end
