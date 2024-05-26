import React, {useState} from 'react';
import CourseGoalList from "./CourseGoalList/CourseGoalList";
import CourseGaolInput from "./CourseGoalInput/CourseGaolInput";

const StyleView = () => {
    const [courseGoals, setCourseGoals] = useState([
        { text: '운동하기', id: 'g1' },
        { text: '완강하기', id: 'g2' },
    ]);

    const addGoalHandler = enteredText => {
        setCourseGoals(prevGoals => {
            const updatedGoals = [...prevGoals];
            updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
            return updatedGoals;
        });
    };

    const deleteItemHandler = goalId => {
        setCourseGoals(prevGoals => {
            const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
            return updatedGoals;
        });
    };

    let content = (
        <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
    );

    if (courseGoals.length > 0) {
        content = (
            <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
        );
    }

    return (
        <div>
            <section id="goal-form">
                <CourseGaolInput onAddGoal={addGoalHandler}/>
            </section>
            <section id="goals">
                {content}
                {/* {courseGoals.length > 0 && (
          <CourseGoalList
            items={courseGoals}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
            </section>
        </div>
    );
};

export default StyleView;