import React, { useCallback } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_PERSON, DELETE_PERSON } from '../store/actions-constant';

const Persons = (props) => {
    const persons = useSelector(state => state.persons);

    const dispatch = useDispatch();
    const addPerson = useCallback((person) => {
        dispatch({ type: ADD_PERSON, val: person })
    });
    const deletePerson = useCallback((personId) => {
        dispatch({ type: DELETE_PERSON, val: personId })
    });

    const personAddedHandler = () => {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor(Math.random() * 40)
        }
        addPerson(newPerson);
        // this.setState((prevState) => {
        //     return { persons: prevState.persons.concat(newPerson) }
        // });
    }

    const personDeletedHandler = (personId) => {
        deletePerson(personId);
        // this.setState((prevState) => {
        //     return { persons: prevState.persons.filter(person => person.id !== personId) }
        // });
    }

    return (
        <div>
            <AddPerson personAdded={personAddedHandler} />
            {persons.map(person => (
                <Person
                    key={person.id}
                    name={person.name}
                    age={person.age}
                    clicked={() => personDeletedHandler(person.id)} />
            ))}
        </div>
    );
}

export default Persons;