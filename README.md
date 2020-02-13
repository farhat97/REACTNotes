# React Notes
---

All the code was taken from this [video](https://www.youtube.com/watch?v=sBws8MSXN7A)

* **Interactive UIs**
* **Component-Based**: encapsulated components that manage their own state:
    Component Structure:
    ```javascript
    Class className extends React.Component {
        state = {
            // state attributes
            title: 'Title',
            body: 'Body'
        };

        render() {
            return {
                <div>
                    <h3> {this.state.title} </h3>
                    <p> {this.state.body} </p>
                </div>
            }
        };
    }
    ```
    Where `render()` is the only required life-cycle method that returns a JSX.

#### How does it operate?

React is a single-page application framework; everything runs form one page, `index.HTML`. The output of all react components is within the `div` "root", which is located under `index.HTML`.

#### Components - State
* State is a snapshot in time
* Users interact with the component's state
* Every react component:
    * Stores the state
    * Enables the user to modify the state
    * Updates the UI when the state is changed

*Tip: when a component has a `render()` method only, this can be defined as a function component for simplicity (and therefore, use `function` instead of `class`)*

#### Styles - Inline Styling
Commponents can have inline style. This is made by using double curly braces like:
```javascript
class className extends Component {
    render() {
        return(
            <div style = {{backgroundColor: '#f4f4f4'}}>
                <p> Some text </p>
            </div>
        )
    }
}

