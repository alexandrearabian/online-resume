import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DownloadElement = ({ type, url, filename, children, icon }) => {

    if (type === 'download') {

        return (
            <a href={url}
                download={filename}
            >
                <button className="element CV">
                    {icon &&
                        <span style={{ marginRight: '0.5em' }}>
                            <FontAwesomeIcon icon={icon} />
                        </span>}
                    {children}
                </button>
            </a>
        );
    } else if (type === 'link') {

        return (
            <a href={url}
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="element CV">
                    {icon &&
                        <span style={{ marginRight: '0.5em' }}>
                            <FontAwesomeIcon icon={icon} />
                        </span>}
                    {children}
                </button>
            </a>
        );
    }
    return null;
};

export default DownloadElement;
