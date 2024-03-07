import * as core from '@actions/core';
import { generateActionMarkdownDocs } from 'action-docs';

async function run(): Promise<void> {
  try {
    const readmeFile: string = core.getInput('readme', { required: true });
    const tocLevel: number = parseInt(core.getInput('tocLevel', { required: true }));
    const actionFile: string = core.getInput('actionFile');
    const sourceFile: string = actionFile ?? core.getInput('sourceFile');
    const lineBreaks = core.getInput('lineBreaks', { required: true }) as 'LF' | 'CR' | 'CRLF';
    const includeNameHeader = core.getInput('includeNameHeader', { required: true }) === 'true';

    await generateActionMarkdownDocs({
      sourceFile,
      readmeFile,
      updateReadme: true,
      tocLevel,
      lineBreaks,
      includeNameHeader,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    core.debug(error);
    core.setFailed(error.message);
  }
}

run();
