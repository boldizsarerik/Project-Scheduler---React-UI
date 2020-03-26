import React from 'react';
import { BreadcrumbsStateless, BreadcrumbsItem } from '@atlaskit/breadcrumbs';

import PageHeader from '@atlaskit/page-header';

const breadcrumbs = (
  <BreadcrumbsStateless onExpand={() => {}}>
    <BreadcrumbsItem text="Projects" key="Projects" />
    <BreadcrumbsItem text="Demo" key="Demo" />
  </BreadcrumbsStateless>
);

export default () => (
  <PageHeader breadcrumbs={breadcrumbs}>
    Demo Schedule
  </PageHeader>
);