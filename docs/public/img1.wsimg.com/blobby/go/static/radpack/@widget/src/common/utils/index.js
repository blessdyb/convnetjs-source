import { inRange, clamp, reduce } from "lodash";

export const spacingVertical = (size = "medium") => ({
  "> :nth-child(n)": {
    marginBottom: size,
  },
  " > :last-child": {
    marginBottom: "0 !important",
  },
});

export const spacingHorizontal = (size = "medium") => ({
  "> :nth-child(n)": {
    marginRight: size,
  },
  " > :last-child": {
    marginRight: "0 !important",
  },
});

export const stringToChildren = (input) => {
  if (typeof input === "string") {
    return { children: input.trim() };
  } else if (input && typeof input === "object") {
    let { children = null } = input;
    if (typeof children === "string") {
      children = children.trim();
    }
    return { ...input, children };
  }
  return { children: null };
};

// mapping shape:
//
//   {
//     large: [0, 30],
//     medium: [31, 100],
//     large: [100]
//   }
//
export const resolveFontSizeCharCount = ({
  count = 0,
  fontSizeMap = {},
  defaultFontSize,
}) => {
  const ranges = reduce(
    fontSizeMap,
    (array, [min, max = Number.MAX_VALUE], fontSize) => {
      array.push({
        range: [min, max],
        fontSize,
      });

      return array;
    },
    []
  );

  let size = defaultFontSize ? defaultFontSize : void 0;
  ranges.forEach(({ range: [min, max], fontSize }) => {
    if (count >= min && count <= max) {
      size = fontSize;
    }
  });

  return size;
};

export const resolveForCharCount = ({
  count = 0,
  valueMap = {},
  defaultValue,
  maxCharCount = 500,
}) => {
  return (
    Object.keys(valueMap).reduce(
      (resolvedValue, key) =>
        resolvedValue ||
        (inRange(count, valueMap[key][0], valueMap[key][1] || maxCharCount) &&
          key),
      false
    ) || defaultValue
  );
};

function parseRichText(text) {
  if (typeof text !== "string" || text[0] !== "{") {
    return null;
  }

  try {
    return JSON.parse(text);
  } catch (e) {
    return null;
  }
}

export function getRichTextCharCount(text) {
  const richText = parseRichText(text) || {};
  const MAX_LINE_CHAR = 25; // base estimate amount of characters that will fit on a line
  let charCount = 0;
  if (richText.blocks) {
    // each block signifies a visual line break
    richText.blocks.forEach((block) => {
      const blockLength = block.text.length;
      /*
        automatically clamp a blocks' character count to MAX_LINE_CHAR if it is below the
        threshold - early line break compensation
        MAX_LINE_CHAR becomes less accurate the more lines that are present,
        as font will scale down while this value remains the same
      */
      charCount += clamp(
        blockLength,
        MAX_LINE_CHAR,
        Math.max(blockLength, MAX_LINE_CHAR)
      );
    });
  }
  return charCount;
}

export const getEditorPageScale = () => {
  const scaler = document.getElementsByClassName("ux-scaled");
  let scale = 1;

  if (scaler && scaler.length > 0) {
    scale = scaler[0].getAttribute("data-scale");
  }
  return scale;
};
