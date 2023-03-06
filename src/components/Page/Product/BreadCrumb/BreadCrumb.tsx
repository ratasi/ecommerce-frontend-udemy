
import { Breadcrumb } from 'semantic-ui-react';
import { BreadCrumbProps } from './BreadCrumb.types'

const BreadCrumb = (props: BreadCrumbProps) => {
    const { categoryName, productName } = props;

    return (
        <Breadcrumb>
            <Breadcrumb.Section>Home</Breadcrumb.Section>
            <Breadcrumb.Divider />
            <Breadcrumb.Section>{categoryName}</Breadcrumb.Section>
            <Breadcrumb.Divider />
            <Breadcrumb.Section active>{productName}</Breadcrumb.Section>
        </Breadcrumb>
    )
}

export default BreadCrumb