migrate((db) => {
  const collection = new Collection({
    "id": "tfdg58zycevse0h",
    "created": "2023-05-04 21:38:21.994Z",
    "updated": "2023-05-04 21:38:21.994Z",
    "name": "players",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gdxu1uhy",
        "name": "player_name",
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
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("tfdg58zycevse0h");

  return dao.deleteCollection(collection);
})
