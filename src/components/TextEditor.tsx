import React from 'react';
import styled from 'styled-components';
import { Editor, EditorContext, WithEditorActions } from '@atlaskit/editor-core';
import { mention, taskDecision } from '@atlaskit/util-data-test';
import { WikiMarkupTransformer } from '@atlaskit/editor-wikimarkup-transformer';

const Container = styled.div`
`;

type Props = { actions: any };
type State = { source: string; output: string };
class TransformerPanels extends React.PureComponent<Props, State> {
  state: State = { source: '', output: '' };

  componentDidMount() {
    window.setTimeout(() => {
      this.props.actions.replaceDocument(this.state.source);
    });
  }

  handleUpdateToSource = (e: React.FormEvent<HTMLDivElement>) => {
    const value = e.currentTarget.innerText;
    this.setState({ source: value }, () =>
      this.props.actions.replaceDocument(value),
    );
  };

  handleChangeInTheEditor = async () => {
    const value = await this.props.actions.getValue();
    this.setState({ output: value });
  };

  render() {
    return (
      <Container>
        <div id="editor">
          <Editor
            appearance="comment"
            allowTextColor={true}
            allowRule={true}
            allowTables={{
              allowColumnResizing: true,
              allowMergeCells: true,
              allowNumberColumn: true,
              allowBackgroundColor: true,
              allowHeaderRow: true,
              allowHeaderColumn: true,
              permittedLayouts: 'all',
              stickToolbarToBottom: true,
            }}
            contentTransformerProvider={schema =>
              new WikiMarkupTransformer(schema)
            }
            allowDate={true}
            mentionProvider={Promise.resolve(
              mention.storyData.resourceProvider,
            )}
            taskDecisionProvider={Promise.resolve(
              taskDecision.getMockTaskDecisionResource(),
            )}
            onChange={this.handleChangeInTheEditor}
          />
        </div>
      </Container>
    );
  }
}

export default () => (
  <EditorContext>
    <WithEditorActions
      render={actions => <TransformerPanels actions={actions} />}
    />
  </EditorContext>
);