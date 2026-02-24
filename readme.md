1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:
getElementById: The getElementById() method used to select an element from DOM that contain a unique id. It returns a single element from DOM.
If id not matched (spealing mistake) it returns null.

getElementsByClassName: The getElementsByClassName() method use to select all the element from DOM that contains the same class name. It return the Live HtmlCollection. It is array like Object. We can use some array method like (.length),arrayIndex, forLoop. If class not matched it return empty HtmlCollection.

querySelector: The querySelector() method used to select the element from the DOM by css selector. It return the matching elements if no match element found return null. it return only one element.

querySelectorAll: The querySelectorAll() method used to select all the element from the DOM that match CSS selector. It returns a NodeList. If not match return empty NodeList. Can select all the elements in NodeList using forEach loop,forOf, index. In modern Js it is very powerful and flexible.


2.How do you create and insert a new element into the DOM?

Answer:
    i. Create the element
        const div = document.createElement('div')
    
    ii.Modify it (text, class, attributes)
           add text: div.innerText = 'hello';
           add class: div.classList.add('');
           add Html : div.innerHTML = ` `;

    iii. Get the parent
           const parent = document.getElementById('')
    iv. Appned Child 
        parent.appendChild(div);

3.What is Event Bubbling? And how does it work?

Answer:
   Event Bubbling is a concept of DOM. It works, when a target element clicked by event handler, the bubble up to its parent element one by one. It will bubbling to reach main document until stop it.

   Example:
        <body>
            <section id="bubbling">
                <h1 id="bubbling-title">Available Jobs</h1>
        
                <ul id="item-list">
                    <li id="item-1">Frontend Developer</li>
                    <li id="item-2">Backend Developer</li>
                    <li id="item-3">Full Stack Developer</li>
                    <li id="item-4">UI/UX Designer</li>
                </ul>
            </section>  
            <script>
                document.getElementById("item-2")
                .addEventListener("click", function() {
                    console.log("item-2 clicked");
                });
                // output:item-2 clicked
                //           item-list 
                //           bubbling section clicked
                
                document.getElementById("item-3")
                .addEventListener("click", function(event) {
                    console.log("item-3 clicked");
                    event.stopPropagation();
                });
                // output:item-3 clicked
                document.getElementById("item-list")
                .addEventListener("click", function() {
                    console.log("item-list clicked");
                });
                // output:item-list clicked

                document.getElementById("bubbling")
                .addEventListener("click", function() {
                    console.log("bubbling section clicked");
                });
                // output: bubbling section clicked
            </script>
        body>


4.What is Event Delegation in JavaScript? Why is it useful?

Answer:
    Event Delegation is a technique based on event bubbling.It handle events efficiently by attaching a single event listener to a parent element. By using event delegation, can select all child element and then identifying the actual source of the event using the (event.target) property.

            .Better performance.
            .work for Dynamic elements.
            .clean code.

5.What is the difference between preventDefault() and stopPropagation() methods?

Answer:
    The main difference between preventDefault() and stopPropagation() is preventDefault() stop the browser's default behavior for an event, while stopPropagation() stop the event from traveling further up or down the DOM tree.