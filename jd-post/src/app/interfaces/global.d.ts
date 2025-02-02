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

interface News {
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

interface Server {
    status: string,
    copyright: string,
    section: string,
    last_updated: string,
    num_results: number,
    results: News[]
}

// For Results Search

interface ServerSearch {
    status: string,
    copyright: string,
    response: Response,
}

interface Response {
    docs: ResultsSearch[],
    meta: Meta
}

interface ResultsSearch {
    abstract: string,
    web_url: string,
    snippet: string,
    lead_paragraph: string,
    source: string,
    multimedia: MultimediaSearch[],
    headline: Headline,
    keywords: Keywords[],
    pub_date: string,
    document_type: string,
    news_desk: string,
    section_name: string,
    byline: Byline,
    type_of_material: string,
    _id: string,
    word_count: string,
    uri: string
}

interface Meta {
    hits: number,
    offset: number,
    time: number
}

interface Legacy {
    xlarge: string,
    xlargewidth: number,
    xlargeheight: number
}

interface MultimediaSearch {
    rank: number,
    subtype: string,
    caption: string,
    credit: string,
    type: string,
    url: string,
    height: number,
    width: number,
    legacy: Legacy,
    subtype: string,
    crop_name: string
}

interface Headline {
    main: string,
    kicker: string,
    content_kicker: string,
    print_headline: string,
    name: string,
    seo: string,
    sub: string
}

interface Keywords {
    name: string,
    value: string,
    rank: number,
    major: string
}

interface Byline {
    original: string,
    person: Person[],
    organization: string
}

interface Person {
    firstname: string,
    middlename: string,
    lastname: string,
    qualifier: string,
    title: string,
    role: string,
    organization: string,
    rank: number
}