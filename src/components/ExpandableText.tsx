import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
  limit?: number;
}

const ExpandableText = ({ children, limit = 300 }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!children) return null;
  if (children.length <= limit) return <Text>{children}</Text>;

  const text = isExpanded ? children : children.substring(0, limit) + "...";
  return (
    <Text>
      {text}
      <Button
        size="xs"
        marginLeft={1}
        fontWeight="bold"
        colorScheme="yellow"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Snow Less" : "Show More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
