import React from 'react';
import ButtonsBottom from '../components/ButtonsBottom';
import Navigation from '../components/Navigation';
import Project from '../components/Project';

export const Project1 = () => {
    return (
        <main>
            <div className="project">
                <Navigation />
                <Project projectNumber={0} />
                <ButtonsBottom left={'/'} right={'/project-2'} />
            </div>
        </main>
    )
}

export const Project2 = () => {
    return (
        <main>
            <div className="project">
                <Navigation />
                <Project projectNumber={1} />
                <ButtonsBottom left={'/project-1'} right={'/contact'} />
            </div>
        </main>
    )
}