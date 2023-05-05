migrate((db) => {
  const collection = new Collection({
    "id": "z7s3qdmh0oexlri",
    "created": "2023-05-04 21:38:48.782Z",
    "updated": "2023-05-04 21:38:48.782Z",
    "name": "teams",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "iiehbxex",
        "name": "player1",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "i06iv1au",
        "name": "player2",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "wwgc04fr",
        "name": "player3",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "queeuy2z",
        "name": "player4",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "8bfosold",
        "name": "player5",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("z7s3qdmh0oexlri");

  return dao.deleteCollection(collection);
})
