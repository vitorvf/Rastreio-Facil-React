import { PostContentContainer } from "./styles";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Company } from "../..";

// interface PostContentProps {
//   content: string;
// }

interface RastreioContent{
  data?:Company;
}

// export function PostContent({ content }: PostContentProps) {


export function PostContent({data}:RastreioContent ) {

  return (
    <PostContentContainer>
      <div>{data?.created_at}</div>
      <ReactMarkdown
        children={'ss'}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                style={dracula as any}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
    </PostContentContainer>
  );
}
