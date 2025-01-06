```javascript
//Incorrect aggregation pipeline causing unexpected results
db.collection.aggregate([
  {
    $match: { field: 'value' }
  },
  {
    $group: {
      _id: '$someField',
      count: { $sum: 1 }
    }
  },
  {
    $sort: { count: -1 }
  },
  {
    $limit: 10 }
])
```