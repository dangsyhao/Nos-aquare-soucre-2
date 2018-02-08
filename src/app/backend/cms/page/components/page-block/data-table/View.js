import React, {Component} from 'react';
import LibraryDataTable from 'library-data-table';

class View extends LibraryDataTable.View {
    renderTableHeader() {
        return <thead>
            <tr>
                <th width="5%">ID</th>
                <th width="20%">Kind</th>
                <th width="50%">Data</th>
                <th width="10%">Sort Order</th>
                <th></th>
            </tr>
        </thead>
    }
    renderEditAction(record) {
        switch (record.kind) {
            case 'banner':
                return <a className="btn btn-xs btn-primary" href={"/backend/page_block/update_banner?id=" + record.id}>Edit</a>
            case 'text':
                return <a className="btn btn-xs btn-primary" href={"/backend/page_block/update_text?id=" + record.id}>Edit</a>
            case 'text-column':
                return <a className="btn btn-xs btn-primary" href={"/backend/page_block/update_text_column?id=" + record.id}>Edit</a>
            case 'horizontal-step':
                return <a className="btn btn-xs btn-primary" href={"/backend/page_block/update_horizontal_step?id=" + record.id}>Edit</a>
            case 'member-listing':
                return <a className="btn btn-xs btn-primary" href={"/backend/page_block/update_member_listing?id=" + record.id}>Edit</a>
            case 'product-listing':
                return <a className="btn btn-xs btn-primary" href={"/backend/page_block/update_product_listing?id=" + record.id}>Edit</a>
            case 'testimonial':
                return <a className="btn btn-xs btn-primary" href={"/backend/page_block/update_testimonial?id=" + record.id}>Edit</a>
            case 'made-for-lisa':
                return <a className="btn btn-xs btn-primary" href={"/backend/page_block/update_made_for_lisa?id=" + record.id}>Edit</a>
            case 'your-micronutrient-need':
                return <a className="btn btn-xs btn-primary" href={"/backend/page_block/update_your_micronutrient_need?id=" + record.id}>Edit</a>
            case 'slider':
                return <a className="btn btn-xs btn-primary" href={"/backend/page_block/update_slider?id=" + record.id}>Edit</a>
            case 'ultimate-bundle':
                return <a className="btn btn-xs btn-primary" href={"/backend/page_block/update_ultimate_bundle?id=" + record.id}>Edit</a>
            case 'faq':
                return <a className="btn btn-xs btn-primary" href={"/backend/page_block/update_faq?id=" + record.id}>Edit</a>
            case 'nutrient-listing':
                return <a className="btn btn-xs btn-primary" href={"/backend/page_block/update_nutrient_listing?id=" + record.id}>Edit</a>
            case 'page-listing':
                return <a className="btn btn-xs btn-primary" href={"/backend/page_block/update_page_listing?id=" + record.id}>Edit</a>
            case 'image-slider':
                return <a className="btn btn-xs btn-primary" href={"/backend/page_block/update_image_slider?id=" + record.id}>Edit</a>
            case 'text-image':
                return <a className="btn btn-xs btn-primary" href={"/backend/page_block/update_text_image?id=" + record.id}>Edit</a>
        }
        return ''
    }
    renderTableBody() {
        var _this = this;
        return (
            <tbody>
                {
                    this.props.dataTable.get('records').map(function(record, i) {
                        return (<tr key={"record-" + i}>
                            <td>{ record.id }</td>
                            <td>{ record.kind }</td>
                            <td></td>
                            <td>{ record.sort_order }</td>
                            <td>
                                { _this.renderEditAction(record)}
                                <a className="btn btn-xs btn-danger" onClick={e=> _this.props.action.delete(_this.props,record.id)}>Delete</a>
                            </td>
                        </tr>)
                    })
                }
            </tbody>
        )
    }
}

export default View;
