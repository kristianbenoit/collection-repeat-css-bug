I use collection repeat with a filter. I styled the items with colors using CSS. When the view is resized (keyboard show/hide) or a browser windows resized, some items get random classes from some other item. Like if the item div is reused to show another item without clearing the classes that was there.

The problem is not present in beta 13 and if I inline the templates in my index.html using ng-template, I could not trigger the bug.

Here's a snippet from the template:

    <div class="item collection-item {{item.type}}" ng-class="{'item-divider': item.isDivider}" ... >

      <div class="category-marker {{item.type}}"></div>
      ...
    </div>

`item.type` are color names. In css:

    .item-divider.brown {
      background-color: #765200;
      color: white; }

    .item-divider.blue {
      background-color: #0a577b;
      color: white; } 

    ...

    .category-marker {
      position: absolute;
      height: 100%;
      width: 5px;
      left: 0px; }

    .category-marker.brown {
      background-color: #c28900; }

    .category-marker.blue {
      background-color: #0f89c2; }

    ...

Searching break the DOM then closing the search breaks it even more : 

<img src="//ionic-forum-uploads.s3.amazonaws.com/9246ac826c7db81d11ebbd716237da994b9a64e5434e.png" width="281" height="500">

Looking at the DOM, I get the following for the blue1 item:
    
    <div class="item collection-item green item-divider blue"  ...>
        <div class="category-marker brown"></div>
              blue1
              ...
    </div>

See a sample app showing the bug here:
https://github.com/kristianbenoit/collection-repeat-css-bug

I can see the bug in chromium and firefox on desktop by resizing the window, but it's harder to trigger.
