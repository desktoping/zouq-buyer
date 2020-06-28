import React from 'react';
import { connect } from 'react-redux';

interface IProps {
  categoryTitle: string;
}

const CategoryPanelComponent = ({ categoryTitle }: IProps) => (
  <div>{categoryTitle}</div>
);

export default connect()(CategoryPanelComponent);
