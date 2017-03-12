class CreateUnitTypes < ActiveRecord::Migration[5.1]
  def change
    create_table :unit_types do |t|
      t.string :name
      t.integer :discipline
      t.integer :discipline_close
      t.integer :armor
      t.integer :defense
      t.integer :hp
      t.integer :fighting
      t.integer :shooting
      t.integer :fighting_damage
      t.integer :shooting_damage
      t.integer :range
      t.integer :speed

      t.timestamps
    end
  end
end
