---
id: 6a7281
name: ARIA state or property has valid value
rule_type: atomic
description: |
  This rule checks that each ARIA state or property has a valid value
accessibility_requirements:
  aria11:state_prop_values:
    title: ARIA 1.1, 6.3 Values for States and Properties
    forConformance: true
    failed: not satisfied
    passed: satisfied
    inapplicable: satisfied
input_aspects:
  - DOM Tree
  - CSS Styling
authors:
  - Wilco Fiers
  - Anne Thyme Nørregaard
---

## Applicability

Any [WAI-ARIA 1.1 state or property](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def) that is not empty (""), and that is specified on an HTML or SVG element.

## Expectation

Each test target has a valid value according to its [WAI-ARIA 1.1 value type](https://www.w3.org/TR/wai-aria-1.1/#propcharacteristic_value).

For value types `ID Reference` and `ID Reference List` for [WAI-ARIA required properties](https://www.w3.org/TR/wai-aria-1.1/#requiredState) at least one of the elements with the given ids exists in the same [document tree](https://www.w3.org/TR/dom41/#document-trees) or [shadow tree](https://www.w3.org/TR/dom41/#shadow-trees) as the element that specifies the target attribute.

For value type `URI` the value matches the [generic URI syntax](https://www.ietf.org/rfc/rfc3986.txt).

**Note:** Only for [WAI-ARIA required properties](https://www.w3.org/TR/wai-aria-1.1/#requiredState) with value types `ID Reference` and `ID Reference List` is there a requirement that the elements with the given ids actually exists. For non-required properties, this is not a requirement.

**Note:**
For value type `URI`, this rule does not require that the destination URI exists.

## Assumptions

This rule catches values that are undefined in WAI-ARIA, and where the resulting behaviour in user agents are also undefined in WAI-ARIA. This might lead to accessibility issues, if the intention was to use behaviour defined in WAI-ARIA. When values are used that do not have a defined behaviour in WAI-ARIA, the HTML/SVG specification decides what default values should be used, since it is defined here what should happen when an invalid value is used for an attribute. If the default value for invalid attribute values happens to match the author's intention for the value, there will not be an accessibility issue.

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [Understanding Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html)
- [ARIA5: Using WAI-ARIA state and property attributes to expose the state of a user interface component](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/ARIA5)
- [WAI-ARIA 1.1, Definitions of States and Properties](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def)
- [WAI-ARIA 1.1, Characteristics of States and Properties, Value](https://www.w3.org/TR/wai-aria/#propcharacteristic_value)
- [Uniform Resource Identifier (URI): Generic Syntax (RFC 3986)](https://www.ietf.org/rfc/rfc3986.txt)

## Test Cases

### Passed

#### Passed Example 1

`aria-required` property with valid true/false value

```html
<div role="textbox" aria-required="true"></div>
```

#### Passed Example 2

`aria-expanded` state with valid true/false/undefined value

```html
<div role="button" aria-expanded="undefined"></div>
```

#### Passed Example 3

`aria-pressed` state with valid tristate value

```html
<div role="button" aria-pressed="mixed"></div>
```

#### Passed Example 4

`aria-errormessage` property with valid ID reference value

```html
<div role="textbox" aria-errormessage="my-error"></div>
```

#### Passed Example 5

`aria-owns` property with valid ID reference list value

```html
<div role="combobox" aria-owns="my-textbox my-grid"></div>
```

#### Passed Example 6

`aria-rowindex` property with valid integer value

```html
<div role="gridcell" aria-rowindex="2">Fred</div>
```

#### Passed Example 7

`aria-valuemin`, `aria-valuemax` and `aria-valuenow` properties with valid number values

```html
<div
	role="spinbutton"
	aria-valuemin="1.0"
	aria-valuemax="2.0"
	aria-valuenow="1.5"
></div>
```

#### Passed Example 8

`aria-placeholder` property with valid string value

```html
<div role="searchbox" aria-placeholder="MM-DD-YYYY">MM-DD-YYYY</div>
```

#### Passed Example 9

`aria-orientation` property with valid token value (property inappropriate for the role)

```html
<div role="button" aria-orientation="horizontal"></div>
```

#### Passed Example 10

`aria-dropeffect` property with valid token list value

```html
<div role="dialog" aria-dropeffect="copy move"></div>
```

#### Passed Example 11

`aria-controls`, which is a required property for the role `scrollbar`, has `ID Reference list` that references at least one element existing in the same document tree.

```html
<div id="content1">Lorem ipsum...</div>
<div
	role="scrollbar"
	aria-controls="content1 content2"
	aria-orientation="vertical"
	aria-valuemax="100"
	aria-valuemin="0"
	aria-valuenow="25"
></div>
```

### Failed

#### Failed Example 1

`aria-required` property with invalid true/false value

```html
<div role="textbox" aria-required="undefined"></div>
```

#### Failed Example 2

`aria-expanded` state with invalid true/false/undefined value

```html
<div role="button" aria-expanded="mixed"></div>
```

#### Failed Example 3

`aria-pressed` state with invalid tristate value

```html
<div role="button" aria-pressed="horizontal"></div>
```

#### Failed Example 4

`aria-errormessage` property with invalid ID reference value, since space is not allowed in a single ID

```html
<div role="textbox" aria-errormessage="error1 error2"></div>
```

#### Failed Example 5

`aria-rowindex` property with invalid integer value

```html
<div role="gridcell" aria-rowindex="2.5">Fred</div>
```

#### Failed Example 6

`aria-valuemin`, `aria-valuemax` and `aria-valuenow` property with invalid number values

```html
<div
	role="spinbutton"
	aria-valuemin="one"
	aria-valuemax="three"
	aria-valuenow="two"
></div>
```

#### Failed Example 7

`aria-live` property with invalid token value

```html
<div role="main" aria-live="nope"></div>
```

#### Failed Example 8

Element with invalid token list value

```html
<div role="dialog" aria-dropeffect="invalid move"></div>
```

#### Failed Example 9

`aria-expanded` state with invalid true/false/undefined value for custom element

```html
<my-button role="button" aria-expanded="collapsed"></my-button>
```

#### Failed Example 10

`aria-controls`, which is a required property for the role `scrollbar`, references an element that does not exist in the same document tree.

```html
<div
	role="scrollbar"
	aria-controls="content1"
	aria-orientation="vertical"
	aria-valuemax="100"
	aria-valuemin="0"
	aria-valuenow="25"
></div>
```

### Inapplicable

#### Inapplicable Example 1

Element does not have any ARIA states or properties

```html
<div>Some Content</div>
```

#### Inapplicable Example 2

Element has ARIA role, but no ARIA states or properties

```html
<div role="button">Some Content</div>
```

#### Inapplicable Example 3

`aria-checked` state with empty value

```html
<div role="checkbox" aria-checked></div>
```

#### Inapplicable Example 4

`aria-labelledby` property with empty value

```html
<div role="searchbox" aria-labelledby=""></div>
```

#### Inapplicable Example 5

`aria-hidden` state on an element that is not an HTML or SVG element

```html
<math aria-hidden="true"></math>
```