interface Multimedia {
    url: string,
    format: string,
    height: number,
    width: number,
    type: string,
    subtype: string,
    caption: string,
    copyright: string
}

export interface News {
    section: string,
    subsection: string,
    title: string,
    abstract: string,
    url: string,
    uri: string,
    byline: string,
    item_type: string,
    updated_date: string,
    created_date: string,
    published_date: string,
    material_type_facet: string,
    kicker: string,
    des_facet: [],
    org_facet: [],
    per_facet: [],
    geo_facet: [],
    multimedia: Multimedia[],
    short_url: string
}