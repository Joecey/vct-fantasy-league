migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tfdg58zycevse0h")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sq6jjuim",
    "name": "original_team",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tfdg58zycevse0h")

  // remove
  collection.schema.removeField("sq6jjuim")

  return dao.saveCollection(collection)
})
