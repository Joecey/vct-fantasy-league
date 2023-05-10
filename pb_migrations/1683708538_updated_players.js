migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tfdg58zycevse0h")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zfgbwyzd",
    "name": "field",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "z7s3qdmh0oexlri",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tfdg58zycevse0h")

  // remove
  collection.schema.removeField("zfgbwyzd")

  return dao.saveCollection(collection)
})
