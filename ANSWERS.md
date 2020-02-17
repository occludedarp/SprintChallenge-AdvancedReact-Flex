- [ ] Why would you use class component over function components (removing hooks from the question)?
        Disregarding the existence of hooks, the reason you would use class components would be if you know that your component needs to be responsible for managing and/or manipulating state as opposed to just receiving and displaying data.

- [ ] Name three lifecycle methods and their purposes.
        ComponentDidMount provides the capacity to change state after the elements first instantiation and subsequent "mounting" to the DOM has occurred, as the name implies.
        
        ComponentDidUpdate provides the capacity to declare what should happen to any given piece of state in response to the component being updated from the DOM due to user interaction.

        ComponentWillUnmount provides the capacity to remove not only the component from the DOM but also any unwanted changes to the DOM that the component may have caused while it was mounted.

- [ ] What is the purpose of a custom hook?
        It is useful for any state that needs to change according to logic that is already present in the application - the logic is abstracted away and stored in the custom hook so that it can be used by called on any pieces of state that need it

- [ ] Why is it important to test our apps?
        It is important to test our apps so that we can provide a more objective environment for investigation as to the robustness of our applications performance in the wild.