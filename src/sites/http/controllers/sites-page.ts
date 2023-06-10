import { Site } from '../../domain/models/site.model';

export const renderSitesPage = (sites: Site[]): string => {
  return `<ul>${sites
    .map((site) => {
      return `
    <div class="container" style="padding: 20px; margin-top: 20px; border: 1px solid #ccc;">
      <h1 style="font-weight: bold; font-size: 2em;">
        ${
          site.logo
            ? `<img src="${site.logo}" alt="${site.name} logo" style="height: 1em; margin-right: 0.5em;">`
            : ''
        }
        ${site.name}
      </h1>
      <p style="font-size: 1.2em;"><strong>ID:</strong> ${site.id}</p>
      <p style="font-size: 1.2em;"><strong>Location:</strong> ${
        site.location.city
      }, ${site.location.address} (${site.location.timeZone})</p>
      <p style="font-size: 1.2em;"><strong>Pictures:</strong></p>
      <div style="display: flex; flex-wrap: wrap; gap: 10px;">
        ${site.pictures
          .map(
            (picture) =>
              `<img src="${picture}" alt="Picture" style="width: 100px; height: 100px;">`,
          )
          .join('')}
      </div>
      <p style="font-size: 1.2em;"><strong>Rooms:</strong></p>
          <ul>
            ${site.rooms
              ?.map(
                (room) =>
                  `<li>
                     <h2>${room.name}</h2>
                     <p>ID: ${room.id}</p>
                     <p>Price per Hour: $${room.pricePerHour}</p>
                     <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                       ${room.pictures
                         .map(
                           (picture) =>
                             `<img src="${picture}" alt="Picture of ${room.name}" style="width: 100px; height: 100px;">`,
                         )
                         .join('')}
                     </div>
                   </li>`,
              )
              .join('')}
          </ul>
    </div>
  `;
    })
    .join('\n')}</ul>`;
};
