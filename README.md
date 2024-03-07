<p>
  <a href="https://github.com/npalm/action-docs-action/actions"><img alt="action-docs-action status" src="https://github.com/npalm/action-docs-action/actions/workflows/ci.yml/badge.svg"></a>
</p>

<!-- action-docs-header action="action.yml" -->
# Action to update GitHub Action documentation
<!-- action-docs-header action="action.yml" -->

This action wraps [action-docs](https://github.com/npalm/action-docs) to update action documentation. By default the action will update `README.md` based on the the `action.yml`. See the parameters for changing the defaults.

## Usages

The action will update you readme by replacing html comment tags. Add one of more tags based on the following template to your repo:  `<!-- action-docs-(header | description | inputs | outputs | runs -->` to add the corresponding section.

- `header` : to add/updae a header based on the name of the action
- `description` : to add/update a section with a descriptions of the action
- `inputs`: to add/update a section with inputs of the action
- `outputs`: to add/update a section with outputs of the action
- `runs`: to add/update a section of the environment required to run.

In your workflow add the action, see below for the available parameters.

```yaml
      - uses: npalm/action-docs-action
```

The action will not commit any change, to ensure the changes are persisted you can use an action to [commit](https://github.com/stefanzweifel/git-auto-commit-action) or raise a [pull request](https://github.com/peter-evans/create-pull-request).


<!-- action-docs-inputs action="action.yml" -->
## Inputs

| name | description | required | default |
| --- | --- | --- | --- |
| `readme` | <p>Readme file to update.</p> | `false` | `README.md` |
| `actionFile` | <p>The action definition file.</p> | `false` | `""` |
| `sourceFile` | <p>The action or workflow definition file.</p> | `false` | `action.yml` |
| `includeNameHeader` | <p>Include the name header in the updated readme.</p> | `false` | `true` |
| `tocLevel` | <p>TOC level used for the headers. The <code>includeNameHeader</code> input is influecing the TOC level, setting <code>includeNameHeader</code> to true will increase the TOC level by 1.</p> | `false` | `2` |
| `lineBreaks` | <p>Line breaks to be used in updated readme (LF|CR|CRLF).</p> | `false` | `LF` |
<!-- action-docs-inputs action="action.yml" -->


<!-- action-docs-runs action="action.yml" -->
## Runs

This action is a `node20` action.
<!-- action-docs-runs action="action.yml" -->
## License

This project are released under the [MIT License](./LICENSE).
