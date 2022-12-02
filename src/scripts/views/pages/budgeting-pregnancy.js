/* eslint-disable no-shadow */
import GrowfieSrc from '../../data/growfie-src';
import { createBudgetingItemTemplate } from '../templates/templates-creator';

const cardDetail = {
  async render() {
    return `
      <div class="container-fluid">
      <div class="title-wrapper py-4 mx-0">
      <h1 class="text-center fw-bold display-4 my-3">Budgeting</h1>
  
      <div class="container text-center mb-3">
          <a href="#/budgeting-pregnancy" class="btn category rounded-pill" aria-current="page">Pregnancy</a>
          <a href="#/budgeting-children" class="btn category rounded-pill">Children</a>
          <a href="#/budgeting-family" class="btn category rounded-pill">Family</a>
      </div>
      </div>
  
      <div class="py-4 mx-4">
          <h3 id="pregnancy" class="text-center">Pregnancy needs</h3>
  
          <div class="row row-cols-md-4 row-cols-sm-2 row-cols-xs-1" id="budgeting"></div>
      </div>
      `;
  },

  async afterRender() {

  },
};

export default cardDetail;