import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as GsfCdkStack from '../lib/gsf-cdk-stack-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new GsfCdkStack.GsfCdkStackStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
