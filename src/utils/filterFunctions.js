import Fuse from 'fuse.js';


export const handleFilterMail = (mails, tag) => {
    return mails.filter(mail => mail.tag === tag)
}

export const handleSearchMail = (mails, term) => {
    const fuse = new Fuse(mails, {
        keys: [
          'subject',
          'body',
        ]
      });
      let results = fuse.search(term)
      results = results.map((res) => res.item)
    return results
}