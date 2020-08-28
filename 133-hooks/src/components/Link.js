import React from "react";

// solution for preventing the page to reload all resource
// everytime we visit a new route!

const Link = ({ className, href, children }) => {
  const onClick = (e) => {
    // support ctrl+click
    if (e.metaKey || e.ctrlKey) return;

    // stop default behavior
    e.preventDefault();

    // update the url in the address bar
    window.history.pushState({}, '', href);

    // emit NavigationEvent for Route components
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };
  return <a className={className} href={href} onClick={onClick}>{children}</a>
};

export default Link;