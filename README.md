## サンプル

文章を書いてみて確かめよう

例えば、カンマで区切ろうとしてもダメなのである

この文書はカンマで切ってみたが「、」に変換されていそうだ

`$ yarn plugin import workspace-tools`

## Commit

https://www.conventionalcommits.org/ja/v1.0.0/

## CSS Policy

- [rscss](https://rfs.jp/sb/html-css/html-css-guide/rscss.html)

上記のRSCSSに準拠しております。
コンポーネントに関してはキャメルケースを使用します。

### サンプル

```scss
// Components
.componentName {
  display: block;

  // Elements
  > .element {
    font-size: 20rem;
  }

  // Variants
  &.-hide {
    display: none;
  }

  // Element with Variants
  &.-hide > .element {
    display: none;
  }
}
```

### 参考リポジトリ

https://github.com/zionboogie/pug_rscss
