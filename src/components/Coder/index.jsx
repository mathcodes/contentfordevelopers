import Highlight, { defaultProps } from "prism-react-renderer";
import dracula from "prism-react-renderer/themes/dracula";

const Coder = ({ code }) => {
  return (
    <Highlight {...defaultProps} theme={dracula} code={code} language="jsx">
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <pre className="text-left my-4 p-2 overflow-scroll" style={style}>
          {tokens.map((line, index) => (
            <div
              className="table-row"
              key={index}
              {...getLineProps({ line, key: index })}
            >
              <div className="table-cell text-right pr-4 select-none opacity-50">
                {index + 1}
              </div>
              <div className="table-cell">
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default Coder;
