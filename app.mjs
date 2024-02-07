import scrape from 'website-scraper';
import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

const main = async () => {
  const url = await question('Digite a URL do site: ');
  const namePath = await question('Digite o nome para o diretório: ');

  const options = {
    urls: url,
    directory: namePath
  };

  await scrape(options)
    .then(() => {
      console.log("Site clonado!")
    })
    .catch(() => {
      console.log("Esse site já foi clonado!")
    });

  rl.close();
};

main();
