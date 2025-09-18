import type { Schema, Struct } from '@strapi/strapi';

export interface CommonImageComponents extends Struct.ComponentSchema {
  collectionName: 'components_common_image_components';
  info: {
    displayName: 'ImageComponents';
    icon: 'chartBubble';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images' | 'files'>;
    Title: Schema.Attribute.String;
  };
}

export interface CommonImageLinksComponents extends Struct.ComponentSchema {
  collectionName: 'components_common_image_links_components';
  info: {
    displayName: 'ImageLinksComponents';
    icon: 'cast';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images' | 'files'>;
    Link: Schema.Attribute.String;
    Remark: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface CommonMoreTextComponents extends Struct.ComponentSchema {
  collectionName: 'components_common_more_text_components';
  info: {
    displayName: 'moreTextComponents';
    icon: 'filter';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Location: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface CommonNav extends Struct.ComponentSchema {
  collectionName: 'components_common_navs';
  info: {
    displayName: 'nav';
    icon: 'attachment';
  };
  attributes: {
    Links: Schema.Attribute.String;
    secendComponents: Schema.Attribute.Component<'common.title-desc', true>;
    Title: Schema.Attribute.String;
  };
}

export interface CommonServices extends Struct.ComponentSchema {
  collectionName: 'components_common_services';
  info: {
    displayName: 'services';
    icon: 'command';
  };
  attributes: {
    channelBanner: Schema.Attribute.Media<'images' | 'files'>;
    channelDescription: Schema.Attribute.Blocks;
    channelName: Schema.Attribute.String;
    servicesDescription: Schema.Attribute.String;
    SuccessfulCasesComponents: Schema.Attribute.Component<
      'common.image-components',
      true
    >;
  };
}

export interface CommonSymbolComponents extends Struct.ComponentSchema {
  collectionName: 'components_common_symbol_components';
  info: {
    displayName: 'SymbolComponents';
    icon: 'priceTag';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Number: Schema.Attribute.String;
    Symbol: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface CommonTitleDesc extends Struct.ComponentSchema {
  collectionName: 'components_common_title_descs';
  info: {
    displayName: 'TitleDesc';
    icon: 'book';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.image-components': CommonImageComponents;
      'common.image-links-components': CommonImageLinksComponents;
      'common.more-text-components': CommonMoreTextComponents;
      'common.nav': CommonNav;
      'common.services': CommonServices;
      'common.symbol-components': CommonSymbolComponents;
      'common.title-desc': CommonTitleDesc;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
