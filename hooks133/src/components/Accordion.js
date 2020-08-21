import React, {useState /* hook */} from 'react';

const Accordion = ({items}) => {
  const [activeIndex, setActiveIndex] = useState(null /* initial value*/);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    // semanticUI does not expect extra div as wrapper  <div key={item.title}>
    // if we write onClick={onTitleClick(index)}, function is called on each render

    const active = index === activeIndex ? 'active' : '';
    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${active}`}
          onClick={() => onTitleClick(index)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    )
  });
  return <div className="ui styled accordion">
    {renderedItems}
  </div>;
}

export default Accordion;