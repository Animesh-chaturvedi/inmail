import Fuse from 'fuse.js';


export const handleFilterMail = (mails, tag) => {
    console.log(mails,"",tag)
    return mails.filter(mail => mail.tag === tag)
}

export const handleSearchMail = (mails, term) => {
  console.log(mails, term, "inside")
    const fuse = new Fuse(mails, {
        keys: [
          'subject',
          'body',
        ]
      });
      let results = fuse.search(term)
      results = results.map((res) => res.item)
      console.log(results)
    return results
}