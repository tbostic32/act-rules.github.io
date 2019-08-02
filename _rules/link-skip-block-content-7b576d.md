---
id: 7b576d
name: Link for skipping block of content
rule_type: atomic
description: |
  This rule checks that blocks of content can be skipped by a link at their beginning
accessibility_requirements:
  wcag-technique:G123: # Adding a link at the beginning of a block of repeated content to go to the end of the block
    forConformance: false
    failed: not satisfied
    passed: further testing needed
    inapplicable: further testing needed
input_aspects:
  - DOM Tree
  - CSS styling
  - Language
authors:
  - Jean-Yves Moyen
  - Anne Thyme Nørregard
---

## Applicability

This rule applies to any [document](#https://dom.spec.whatwg.org/#concept-document) where the [document element](#https://dom.spec.whatwg.org/#document-element) is an HTML `html` element.

## Expectations

For each [section of repeated content](#repeated-content) within the test target, either the last element in the [flat tree](https://drafts.csswg.org/css-scoping/#flat-tree) (work in progress) which is both [focusable](#focusable) element and before this [section of repeated content](#repeated-content), or the first element in the [flat tree](https://drafts.csswg.org/css-scoping/#flat-tree) (work in progress) which is both [focusable](#focusable) element and inside this [section of repeated content](#repeated-content) has a [semantic role](#semantic-role) of `link` and:
- is [included in the accessibility tree](#included-in-the-accessibility-tree); and
- is [visible](#visible) when [focused](#focused); and
- when activated, moves focus to the first element in the [flat tree](https://drafts.csswg.org/css-scoping/#flat-tree) (work in progress) that is both [focusable](#focusable) and after this [section of content](#section-of-content); and
- has an [accessible name](#accessible-name) that communicates that it skips this [section of content](#section-of-content).

## Assumptions

This rule assumes that [sections of repeated content](#repeated-content) have already been identified within the test target, for example by comparison with other test targets within the same website, or any other means.

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [G123: Adding a link at the beginning of a block of repeated content to go to the end of the block](https://www.w3.org/WAI/WCAG21/Techniques/general/G123)

## Test Cases

### Passed

#### Passed Example 1

```html
<!DOCTYPE html>
<html lang="en">
  <head><title></title></html>

</html>
```

#### Passed Example 2

```html
<!DOCTYPE html>
<html lang="en">
  <head><title></title></html>

</html>
```

#### Passed Example 3

```html
<!DOCTYPE html>
<html lang="en">
  <head><title></title></html>

</html>
```

### Failed

#### Failed Example 1

```html
<!DOCTYPE html>
<html lang="en">
  <head><title></title></html>

</html>
```

#### Failed Example 2

```html
<!DOCTYPE html>
<html lang="en">
  <head><title></title></html>

</html>
```

#### Failed Example 3

```html
<!DOCTYPE html>
<html lang="en">
  <head><title></title></html>

</html>
```

#### Failed Example 4

```html
<!DOCTYPE html>
<html lang="en">
  <head><title></title></html>

</html>
```

### Inapplicable

#### Inapplicable Example 1

The [document element](#https://dom.spec.whatwg.org/#document-element) of this [document](#https://dom.spec.whatwg.org/#concept-document) is not an `html` element.

```svg
<svg xmlns="http://www.w3.org/2000/svg">
  <title>This is an SVG</title>
</svg>
```
