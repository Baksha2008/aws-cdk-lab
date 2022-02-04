#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AwsLabsStack } from '../lib/aws_labs-stack';

const app = new cdk.App();
new AwsLabsStack(app, 'AwsLabsStack');
