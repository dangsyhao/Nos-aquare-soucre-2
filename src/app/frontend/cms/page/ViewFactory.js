import React, { Component } from 'react';

import BannerView from './components/banner/View';
import BannerAction from './components/banner/Action';
import BannerStore from './components/banner/Store';
import HorizontalStepView from './components/horizontal-step/View';
import HorizontalStepAction from './components/horizontal-step/Action';
import HorizontalStepStore from './components/horizontal-step/Store';
import YourMicronutrientNeedView from './components/your-micronutrient-need/View';
import YourMicronutrientNeedAction from './components/your-micronutrient-need/Action';
import YourMicronutrientNeedStore from './components/your-micronutrient-need/Store';
import TextView from './components/text/View';
import TextAction from './components/text/Action';
import TextStore from './components/text/Store';
import TextColumnView from './components/text-column/View';
import TextColumnAction from './components/text-column/Action';
import TextColumnStore from './components/text-column/Store';
import MadeForLisaView from './components/made-for-lisa/View';
import MadeForLisaAction from './components/made-for-lisa/Action';
import MadeForLisaStore from './components/made-for-lisa/Store';
import ProductListingView from './components/product-listing/View';
import ProductListingAction from './components/product-listing/Action';
import ProductListingStore from './components/product-listing/Store';
import TestimonialView from './components/testimonial/View';
import TestimonialAction from './components/testimonial/Action';
import TestimonialStore from './components/testimonial/Store';
import MemberListingView from './components/member-listing/View';
import MemberListingAction from './components/member-listing/Action';
import MemberListingStore from './components/member-listing/Store';
import SliderView from './components/slider/View';
import SliderAction from './components/slider/Action';
import SliderStore from './components/slider/Store';
import UltimateBundleView from './components/ultimate-bundle/View';
import UltimateBundleAction from './components/ultimate-bundle/Action';
import UltimateBundleStore from './components/ultimate-bundle/Store';
import FAQView from './components/faq/View';
import FAQAction from './components/faq/Action';
import FAQStore from './components/faq/Store';
import NutrientListingView from './components/nutrient-listing/View';
import NutrientListingAction from './components/nutrient-listing/Action';
import NutrientListingStore from './components/nutrient-listing/Store';
import PageListingView from './components/page-listing/View';
import PageListingAction from './components/page-listing/Action';
import PageListingStore from './components/page-listing/Store';
import ImageSliderView from './components/image-slider/View';
import ImageSliderAction from './components/image-slider/Action';
import ImageSliderStore from './components/image-slider/Store';
import TextImageView from './components/text-image/View';
import TextImageAction from './components/text-image/Action';
import TextImageStore from './components/text-image/Store';
import FashionAIClothDetectionView from './components/fashion-ai-cloth-detection/View';
import FashionAIClothDetectionAction from './components/fashion-ai-cloth-detection/Action';
import FashionAIClothDetectionStore from './components/fashion-ai-cloth-detection/Store';

class ViewFactory {
    constructor(dispatcher) {
        this.dispatcher = dispatcher;
        this.blocks = []
        this.components = {
            'banner':                       [BannerAction, BannerStore, BannerView],
            'text':                         [TextAction, TextStore, TextView],
            'horizontal-step':              [HorizontalStepAction, HorizontalStepStore, HorizontalStepView],
            'your-micronutrient-need':      [YourMicronutrientNeedAction, YourMicronutrientNeedStore, YourMicronutrientNeedView],
            'text-column':                  [TextColumnAction, TextColumnStore, TextColumnView],
            'made-for-lisa':                [MadeForLisaAction, MadeForLisaStore, MadeForLisaView],
            'product-listing':              [ProductListingAction, ProductListingStore, ProductListingView],
            'testimonial':                  [TestimonialAction, TestimonialStore, TestimonialView],
            'member-listing':               [MemberListingAction, MemberListingStore, MemberListingView],
            'slider':                       [SliderAction, SliderStore, SliderView],
            'ultimate-bundle':              [UltimateBundleAction, UltimateBundleStore, UltimateBundleView],
            'faq':                          [FAQAction, FAQStore, FAQView],
            'nutrient-listing':             [NutrientListingAction, NutrientListingStore, NutrientListingView],
            'page-listing':                 [PageListingAction, PageListingStore, PageListingView],
            'image-slider':                 [ImageSliderAction, ImageSliderStore, ImageSliderView],
            'text-image':                   [TextImageAction, TextImageStore, TextImageView],
            'fashion-ai-cloth-detection':   [FashionAIClothDetectionAction, FashionAIClothDetectionStore, FashionAIClothDetectionView],
        }
    }
    createBlocks(blocks) {
        var _this = this;
        for (var i = 0; i < blocks.length; i++) {
            var block = blocks[i]
            var blockId = 'block_' + block.id

            if (this.components[block.kind]) {
                var classes = this.components[block.kind]
                this.blocks.push({
                    'id':       blockId,
                    'action':   new classes[0](_this.dispatcher, blockId),
                    'store':    new classes[1](_this.dispatcher, blockId),
                    'view':     classes[2],
                    'parameters':  blocks[i]['parameters']
                })
            }
        }
    }
    buildStores(stores) {
        for (var i = 0; i < this.blocks.length; i++) {
            stores.push(this.blocks[i]['store'])
        }
        return stores
    }
    calculateState(state) {
        for (var i = 0; i < this.blocks.length; i++) {
            var id = this.blocks[i]['id']
            var store = this.blocks[i]['store']
            state[id] = store.getState()
        }
        return state
    }
    renderBlocks(props) {
        var _this = this;
        var blocks = []
        for (var i = 0; i < this.blocks.length; i++) {
            var view = this.blocks[i]['view']
            var id = this.blocks[i]['id']
            var parameters = this.blocks[i]['parameters']
            blocks.push(React.createElement(view, {
                action:        _this.blocks[i]['action'],
                data:          props[id],
                parameters:    parameters
            }))
        }
        return blocks
    }
}

export default ViewFactory;
