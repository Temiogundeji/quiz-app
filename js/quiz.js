import Model from './quizModel';
import View from './quizView';
import Controller from './quizController';

const app = new Controller(new Model(), new View);
