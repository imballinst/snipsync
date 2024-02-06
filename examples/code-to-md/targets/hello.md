# hello

Test markdown

<!--SNIPSTART hellouniverse-->
```js
console.log("xdd");
```
<!--SNIPEND-->

1. Test bullet point

<!--SNIPSTART hellouniverse {"numberOfLeadingSpaces":2}-->
  ```js
  console.log("xdd");
  ```
<!--SNIPEND-->

2. Test bullet point 2

<!--SNIPSTART hellouniverse {"numberOfLeadingSpaces":3}-->
   ```js
   console.log("xdd");
   ```
<!--SNIPEND-->

## Test selective numbers

<!--SNIPSTART hehe {"selectedLines": ["1", "3-5", "8"]}-->
```js
function testSelectLines() {
// ...
  console.info("2");
  console.info("3");
  console.info("4");
// ...
}
```
<!--SNIPEND-->

<!--SNIPSTART hehe {"selectedLines": ["1", "3-5", "8"],"ellipsisCommentReplacement":""}-->
```js
function testSelectLines() {

  console.info("2");
  console.info("3");
  console.info("4");

}
```
<!--SNIPEND-->
